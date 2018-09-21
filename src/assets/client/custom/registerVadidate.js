function formValidation()
{
    var username = document.registration.username;
    var password = document.registration.password;
    var repassword = document.registration.repassword;
    var fullname = document.registration.fullname;
    var address = document.registration.address;
    var phonenum = document.registration.phoneNum;
    var email = document.registration.email;
    if (username_validation(username, 5, 20))
    {
        if (password_validation(password, 5, 20))
        {
            if (repassword_validation(repassword, password))
            {
                if (allLetter(fullname))
                {
                    if (allLetter1(address))
                    {
                        if (allnumeric(phonenum))
                        {
                            if (ValidateEmail(email))
                            {

                            }
                        }
                    }
                }
            }
        }
    }
    return false;

}
function username_validation(username, mx, my)
{
    var uid_len = username.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx)
    {
        swal("Thông báo","Tên đăng nhập không được để trống và độ dài trong khoảng " + mx + " đến " + my);
        username.focus();
        return false;
    }
    return true;
}
function password_validation(password, mx, my)
{
    var passid_len = password.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx)
    {
        swal("Thông báo","Mật khẩu không được để trống và độ dài trong khoảng " + mx + " đến " + my);
        password.focus();
        return false;
    }
    return true;
}

function repassword_validation(password,repassword)
{
    if (password.value != repassword.value)
    {
        swal("Thông báo","Mật khẩu nhập lại không chính xác");
        repassword.focus();
        return false;
    }
    return true;
}

function allLetter(fullname)
{
    var letters = /^[A-Za-z]+$/;
    if (fullname.value.length !=0)
    {
        return true;
    } else
    {
        swal('Thông báo','Tên đầy đủ không được để trống');
        fullname.focus();
        return false;
    }
}

function allLetter1(address)
{
    var letters = /^[A-Za-z]+$/;
    if (address.value.length !=0)
    {
        return true;
    } else
    {
        swal('Thông báo','Địa chỉ không được để trống');
        address.focus();
        return false;
    }
}

function allnumeric(phonenum)
{
    var numbers = /^[0-9]+$/;
    if (phonenum.value.match(numbers))
    {
        return true;
    } else
    {
        swal('Thông báo','Số điện thoại chỉ được chứa ký tự từ  0-9');
        phonenum.focus();
        return false;
    }
}
function ValidateEmail(email)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat))
    {
        document.registration.action = "register";
        document.registration.submit();
        return true;
    } else
    {
        swal('Thông báo','Email không chính  xác');
        return false;
    }
}


