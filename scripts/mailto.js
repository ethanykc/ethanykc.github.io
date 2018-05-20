<script language="JavaScript">
var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("email","email",
  "Please enter a valid email address");
</script>

<script language="JavaScript">
/*===========================================================*/
/*  Contact Form
/*===========================================================*/ 
$('#contact-form').validate({
rules: {
    name: {
        minlength: 1,
        required: true
    },
    phone: {
        minlength: 10,
        required: false
    },
    email: {
        required: true,
        email: true
    },
    subject: {
        required: true
    },
	website: {
        required: false
    },
    message: {
        minlength: 6,
        required: true
        }
    },
    highlight: function(element) {
        $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
        element
        .text('OK!').addClass('valid')
        .closest('.control-group').removeClass('error').addClass('success');
    }
});
	
</script>	
	
	
// JavaScript Document