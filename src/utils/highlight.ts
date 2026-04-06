const keywords = new Set([
  'const',
  'let',
  'var',
  'function',
  'return',
  'async',
  'await',
  'export',
  'import',
  'from',
  'new',
  'class',
  'try',
  'catch',
  'if',
  'else',
  'for',
  'while',
  'def',
  'str',
  'pass',
])

export const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const baseWordChar = /[A-Za-z0-9_]/

const renderToken = (tok: string, lang: string) => {
  const t = escapeHtml(tok)
  if (keywords.has(tok))
    return `<span class='text-blue-300 font-semibold'>${t}</span>`
  if (/^\d+(?:\.\d+)?$/.test(tok))
    return `<span class='text-amber-300'>${t}</span>`

  // RAG-specific tokens
  if (lang === 'typescript') {
    if (tok === 'similarity_top_k')
      return `<span class='text-emerald-300'>${t}</span>`
    if (
      [
        'buildIndex',
        'asQueryEngine',
        'query',
        'loadData',
        'fromDocuments',
        'persist',
        'toString',
        'log',
      ].includes(tok)
    )
      return `<span class='text-cyan-300'>${t}</span>`
    if (['SimpleDirectoryReader', 'VectorStoreIndex', 'console'].includes(tok))
      return `<span class='text-emerald-300'>${t}</span>`
    // Auto-detect class names (PascalCase)
    if (/^[A-Z][a-zA-Z0-9]*$/.test(tok) && !keywords.has(tok))
      return `<span class='text-emerald-300'>${t}</span>`
  }

  // Agent-specific tokens
  if (lang === 'json') {
    if ([`"tool_name"`, `"parameters"`, `"query"`].includes(tok))
      return `<span class='text-emerald-300'>${t}</span>`
  }

  if (lang === 'python') {
    if ([`search_arxiv_paper`, `get_llm_output`].includes(tok))
      return `<span class='text-cyan-300'>${t}</span>`
  }

  if (lang === 'markdown') {
    if (tok.startsWith('#')) return `<span class='text-cyan-300'>${t}</span>`
    if (tok.startsWith('**') && tok.endsWith('**'))
      return `<span class='text-amber-300'>${t}</span>`
    if (tok.startsWith('`') && tok.endsWith('`'))
      return `<span class='text-emerald-300'>${t}</span>`
  }

  return t
}

export const highlight = (input: string, lang: string) => {
  let out = ''
  let token = ''
  let i = 0
  const n = input.length
  let state:
    | 'normal'
    | 'stringSingle'
    | 'stringDouble'
    | 'lineComment'
    | 'blockComment' = 'normal'
  const isWord = (ch: string) => {
    if (lang === 'markdown') return /[A-Za-z0-9_#*`]/.test(ch)
    return baseWordChar.test(ch)
  }
  while (i < n) {
    const ch = input[i]
    const next = i + 1 < n ? input[i + 1] : ''
    if (state === 'normal') {
      if (lang !== 'markdown' && ((ch === '/' && next === '/') || ch === '#')) {
        if (token) {
          out += renderToken(token, lang)
          token = ''
        }
        state = 'lineComment'
        out += `<span class='text-slate-400'>${escapeHtml(ch === '#' ? '#' : '//')}`
        i += ch === '#' ? 1 : 2
        continue
      }
      if (ch === '/' && next === '*') {
        if (token) {
          out += renderToken(token, lang)
          token = ''
        }
        state = 'blockComment'
        out += `<span class='text-slate-400'>${escapeHtml('/*')}`
        i += 2
        continue
      }
      if (ch === "'" || ch === '"') {
        if (token) {
          out += renderToken(token, lang)
          token = ''
        }
        const delim = ch
        state = ch === "'" ? 'stringSingle' : 'stringDouble'
        out += `<span class='text-cyan-300'>${escapeHtml(delim)}`
        i++
        while (i < n) {
          const c = input[i]
          if (c === '\\') {
            out += escapeHtml(c)
            i++
            if (i < n) {
              out += escapeHtml(input[i])
              i++
            }
            continue
          }
          if (c === delim) {
            out += escapeHtml(c)
            out += '</span>'
            state = 'normal'
            i++
            break
          }
          out += escapeHtml(c)
          i++
        }
        continue
      }
      if (isWord(ch)) {
        token += ch
        i++
        continue
      }
      if (token) {
        out += renderToken(token, lang)
        token = ''
      }
      out += escapeHtml(ch)
      i++
      continue
    }
    if (state === 'lineComment') {
      if (ch === '\n') {
        out += '</span>'
        out += '\n'
        state = 'normal'
        i++
        continue
      }
      out += escapeHtml(ch)
      i++
      continue
    }
    if (state === 'blockComment') {
      if (ch === '*' && next === '/') {
        out += escapeHtml('*/')
        out += '</span>'
        i += 2
        state = 'normal'
        continue
      }
      out += escapeHtml(ch)
      i++
      continue
    }
  }
  if (token) out += renderToken(token, lang)
  return out
}
