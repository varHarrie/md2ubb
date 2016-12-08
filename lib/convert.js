var rules = {
  italic: {
    regexp: /(\*{3})([^*]+)\1/g,
    replacement: '[i]$2[/i]'
  },
  bold: {
    regexp: /(\*{2})([^*]+)\1/g,
    replacement: '[b]$2[/b]'
  },
  underscore: {
    regexp: /(_{2})([^*]+)\1/g,
    replacement: '[u]$2[/u]'
  },
  hx: {
    regexp: /(#{4,})\s*([^\n]+)/g,
    replacement: '[size=4][b]$2[/b][/size]'
  },
  h3: {
    regexp: /(#{3,})\s*([^\n]+)/g,
    replacement: '[size=5][b]$2[/b][/size]'
  },
  h2: {
    regexp: /(#{2,})\s*([^\n]+)/g,
    replacement: '[size=6][b]$2[/b][/size][hr]'
  },
  h1: {
    regexp: /(#{1,})\s*([^\n]+)/g,
    replacement: '[size=7][b]$2[/b][/size][hr]'
  },
  hr: {
    regexp: /\-{3,}/g,
    replacement: '[hr]'
  },
  quote: {
    regexp: /(>.*\s?)+/g,
    replacement: (block) => {
      return '[quote]' + block.split(/>\s*/).join('') + '[/quote]'
    }
  },
  code: {
    regexp: /```(\s?\w+)((.*\n)+)```/g,
    replacement: '[code]$2[/code]'
  },
  shortcode: {
    regexp: /`(.+)`/g,
    replacement: '[backcolor=LemonChiffon]$1[/backcolor]'
  },
  image: {
    regexp: /!\[([^\]]+)\]\(([^\)]*)\)/g,
    replacement: '[img]$2[/img]'
  },
  link: {
    regexp: /\[([^\]]+)\]\(([^\)]*)\)/g,
    replacement: '[url=$2]$1[/url]'
  },
  ul: {
    regexp: /(^\s*\-.*\n?)+/gm,
    replacement: (block) => {
      return '[list]\n' + block.replace(/^\-\s*(.*)/gm, '[*]$1') + '[/list]'
    }
  }
}

module.exports = function convert (md) {
  return [
    'italic',
    'bold',
    'underscore',
    'hx',
    'h3',
    'h2',
    'h1',
    'hr',
    'quote',
    'code',
    'shortcode',
    'image',
    'link',
    'ul'
  ].reduce((md, type) => {
    return md.replace(
      rules[type].regexp,
      rules[type].replacement
    )
  }, md)
}
