//Log In 
    const exLogIns = document.querySelectorAll('.log')
    const modal = document.querySelector('.js-modal')
    const modalClose = document.querySelector('.js-modal-close')
    
    const modalCloseFooter = document.querySelector('.js-close-footer')

    const modalContainer = document.querySelector('.js-container')
    function showLogIn(){
        modal.classList.add('open')
    }
    function closeLogIn(){
        modal.classList.remove('open')
    }
    for(const exLogIn of exLogIns){
        exLogIn.addEventListener('click',showLogIn)
    }
    modalClose.addEventListener('click',closeLogIn)

    modalCloseFooter.addEventListener('click',closeLogIn)

    modal.addEventListener('click',closeLogIn)

    modalContainer.addEventListener('click',function(event){
        event.stopPropagation()
    })



//   Open/Close menu phone 
  var header = document.getElementById('header');
  var mobileMenu = document.getElementById('mobile-menu');
  var heightHeader = header.clientHeight;

  mobileMenu.onclick = function(){
      var isClose = header.clientHeight === heightHeader;
      if(isClose){
          header.style.height = 'auto';
      }else{
          header.style.height = null;
      }
  }

  var menuItems = document.querySelectorAll('#nav li a[href *= "#"]');
  for(var i = 0; i < menuItems.length; i++){
      var menuItem = menuItems[i];

      menuItem.onclick = function(event){
          var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
          if(isParentMenu){
              event.preventDefault();
          }else{
              header.style.height = null;
          }
      }
  }


  //Verify
  function validateForm() {
            

    var mailLog = emailLog.value.trim();
    var passLogIn = passLog.value.trim();




    if (mailLog === '') {
        mailLogErrorMessage.textContent = '*Vui lòng nhập tài khoản Email của bạn.';
        isValid = false;
        alert('Tài khoản hoặc mật khẩu không hợp lệ');
    } else {
        mailLogErrorMessage.textContent = '';
    }

    if (passLogIn === '') {
        passLogErrorMessage.textContent = '*Vui lòng nhập mật khẩu của bạn.';
        isValid = false;
    } else {
        passLogErrorMessage.textContent = '';
        alert('Đăng nhập thành công!');
    }
}

function validateForm2() {
    var mailName = emailInput.value.trim();
    var isValid = true;

    if (!validateEmail(emailInput.value)) {
        emailErrorMessage.textContent = '*Vui lòng nhập một địa chỉ email hợp lệ.';
        isValid = false;
    } else {
        emailErrorMessage.textContent = '';
        alert('Cảm ơn bạn đã gửi mail về cho Figure AnimeVN');
    }
}
function validateEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}