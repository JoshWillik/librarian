module.exports = function( req, res, next ){
  res.send({
    status: 'warning',
    message: 'File embeds are not supported in this version of Librarian'
  })
}
