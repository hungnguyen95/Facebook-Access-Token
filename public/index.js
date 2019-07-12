$('#getToken').click(() => {
  let id = $('#email').val();
  let pw = $('#password').val();
  fetch(`https://facebook-access-token.herokuapp.com/auth?id=${id}&pass=${encodeURIComponent(pw)}`)
    .then(e => e.json())
    .then(e => {
      let res = e.loc || e.error;
      $('#result').text(res);
    });
});
