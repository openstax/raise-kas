export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/cjs/index.js',
      sourcemap: true,
      format: 'cjs'
    },
    {
      file: 'dist/es/index.js',
      sourcemap: true,
      format: 'es'
    }
  ],
  external: [
    'underscore'
  ]
};