const expect = require('chai').expect
const convert = require('../lib/convert')

describe('md2ubb', () => {
  test('italic', '*test*', '[i]test[/i]')
  test('italic', '* test *', '[i] test [/i]')

  test('bold', '**test**', '[b]test[/b]')
  test('bold', '** test **', '[b] test [/b]')

  test('underscore', '__test__', '[u]test[/u]')
  test('underscore', '__ test __', '[u] test [/u]')
  
  test('hx', '#####    test asd bbb', '[size=4][b]test asd bbb[/b][/size]')
  test('hx', '####test asd bbb', '[size=4][b]test asd bbb[/b][/size]')

  test('h3', '###    33333', '[size=5][b]33333[/b][/size]')
  test('h2', '##    22222', '[size=6][b]22222[/b][/size][hr]')
  test('h1', '#    11111', '[size=7][b]11111[/b][/size][hr]')

  test('hr', '---', '[hr]')
  test('hr', '--------------', '[hr]')

  test('quote', `> 1111
> 2222
>   
> 333333
>
> 4444
> 5555

> aaaa
>    bbbbbb
`, `[quote]1111\n2222\n\n333333\n\n4444\n5555\n[/quote]\n[quote]aaaa\nbbbbbb\n[/quote]`)
  
  test('code', '``` javascript\nconst a = 5;\nconst b = 6;\n```', '[code]\nconst a = 5;\nconst b = 6;\n[/code]')

  test('shortcode', '`test``test2`', '[backcolor=LemonChiffon]test[/backcolor][backcolor=LemonChiffon]test2[/backcolor]')

  test('image', '![](/a.png)', '[img]/a.png[/img]')
  test('image', '![test](/a.png)', '[img]/a.png[/img]')

  test('link', '[](/a/b/c)', '[url=/a/b/c][/url]')
  test('link', '[test](/a/b/c)', '[url=/a/b/c]test[/url]')

  test('ul', `- 111
- 222
-333
- 444
`, '[list]\n[*]111\n[*]222\n[*]333\n[*]444\n[/list]')
})

function test(name, source, target) {
  it(name, () => {
    const result = convert(source)
    expect(result).to.equal(target)
  })
}