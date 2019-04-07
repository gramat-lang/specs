hljs.registerLanguage('gramat', hljs => {
  const one_alpha = '[A-Za-z\-_]';
  const any_alphanum = '[A-Za-z0-9\\-_]*';
  return {
    contains: [
      {
        className: 'string',
        variants: [
          { begin: /\"/, end: /\"/ },
          { begin: /\'/, end: /\'/ },
        ]
      },
      {
        className: 'comment',
        variants: [
          { begin: /\/\//, end: /$/ },
          { begin: /\/\*/, end: /\*\// }
        ]
      },
      {
        className: 'declaration',
        variants: [
          {
            begin: '\\@' + one_alpha,
            end: any_alphanum,
          },
          {
            begin: one_alpha + any_alphanum + "\\s*=",
          },
        ]
      },
      {
        className: 'keyword',
        variants: [
          { begin: '\\<\\s*[A-Za-z\-_0-9]+' },
          { begin: '\\>' },
        ],
      },
    ]
  };
});
