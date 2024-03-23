<script>
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var brandName = document.getElementById("brand-name").value.toLowerCase(); // Convert input brand name to lowercase
        var password = document.getElementById("password").value;

        // Simulate authentication
        // Replace this with actual backend authentication logic
        if (brandName === "bajaj" && password === "HTB@4400") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1eEAAo6k6b-5-ObeU4uRkWY6DpCjoo8SYQQWw7rETh08/edit#gid=105666129";
        } else if (brandName === "itel" && password === "smobile@2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/104j22nAt7S9VJap-P19LPLXfbo2p21Y3lMRU2eQvo5o/edit#gid=105666129";
        } else if (brandName === "iair" && password === "iairtech@2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/18v1seRQvEfotkcNbNUnRfFd2DzjuyS6WPDw0v2616Tk/edit#gid=105666129";
        } else if (brandName === "bergner" && password === "S&S@bergner") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1TGv0uEhmi-pRcTZwT_0AItLkU8XelNTXdhLsO9nUBHQ/edit#gid=105666129";
        } else if (brandName === "hawkins" && password === "cookware@2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1VPgOR1KkRrPULIuK5ucP5qBBoepfZ3Wh4yTm7NWf1o0/edit#gid=105666129";
        } else if (brandName === "hul" && password === "UNILIVER2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1LSnaeffv3wkb_FIFK3aGKeHUSJc1k1yI8Ru3UEc57YE/edit#gid=105666129";
        } else if (brandName === "lenovo" && password === "1993@LenovoHardTrac") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1IEWr4k9FhO0OgdFmrd34SxNZqaCsI4_59ru2YKAZMXI/edit#gid=105666129";
        } else if (brandName === "orange" && password === "S&P@orange") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1y_0BHVDdkJABfj9i4yi-JzoU3ONJ9S4wzNCJtEssEjg/edit#gid=105666129";
        } else if (brandName === "orient" && password === "orient@1234") {
            window.location.href = "https://docs.google.com/spreadsheets/d/11Y3mEhBMIC73mVKzeMi1Pq7_Ajkw8ickBTJexec0Np0/edit#gid=105666129";
        } else if (brandName === "racold" && password === "ARISTON2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1do-f0XIcHFwfr78y-4oe3_ZDPhHslpou4VMV1Snrl98/edit#gid=105666129";
        } else if (brandName === "luminous" && password === "STEP@2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/15_qgg3CVCo9yTK4UDFdsT1n9s26Tgk9b12ag94F3UUA/edit#gid=105666129";
        } else if (brandName === "realme" && password === "Hardtrac@1993RealME") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1_vuGDhkxNUC5VeeXTutvv8ud6MjbJWXVMxJDDkMww-Q/edit#gid=105666129";
        } else if (brandName === "rapoo" && password === "RapooM650") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1SRE8l8NqxhBfVsqhUjlHz1rOqFKHQvuWDIlRLPwV_2c/edit#gid=105666129";
        } else if (brandName === "singer" && password === "SHT@2200") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1QyYr-Yd8h8_8ZrTcDREfCP6tFYdZTqgaRJiBOh6-TgA/edit#gid=105666129";
        } else if (brandName === "sunflame" && password === "vgaurd2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1DlhFAwne105WVIiPabpq36619Hvhb3aWu5R4ZNYG-Jg/edit#gid=105666129";    
        } else if (brandName === "suryaflame" && password === "surya2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1hekILv6cRks-nuwGJobvxFK17f7YjiBladxqAb5ijxk/edit#gid=105666129";
        } else if (brandName === "tecno" && password === "Tecno@22324") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1N0HTD4d71sf0CI6Nt6mKsVbaRylrUDCpY8yvGxBvxVg/edit#gid=105666129";
        } else if (brandName === "vinod" && password === "vinod@1234") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1I0EMDJ1CzrQjxcul984Mvnm6KFzhdISd422cDeyxsHA/edit#gid=105666129";
        } else if (brandName === "wipro" && password === "wipro@1234") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1SM9I6EUwUIV-B8t9xLQyCPrevbhUF_WHf0sj_B93zRg/edit#gid=105666129";
        } else if (brandName === "wonderchef" && password === "HTW17WCF") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1LrGQhxUmrQHI5B5Ob6XtY7V1XokJTJZppnvQPuU7SjM/edit#gid=105666129";
        } else if (brandName === "lapcare" && password === "LapcareL999") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1p20g_yows881V4B85HR_Ov60JDi19_FNQDQyr0EdbMo/edit#gid=105666129";
        } else if (brandName === "lava" && password === "lavainternational@2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1sgIULTaAQ6_gl31eCDgEKLe9zdTDs8EVezEDdeOuSI8/edit#gid=105666129";
        } else if (brandName === "nokia" && password === "hmdglobal@2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1wSGR41cx861cv_x9WB2cxgCsRuQRCM0ZV7WItXLdlYg/edit#gid=105666129";
        } else if (brandName === "philips" && password === "HTW17SP09") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1XblANigKU-BeAS_YC46BZvw9imp16a1ikT4i5qv2rzM/edit#gid=105666129";
        } else if (brandName === "toshiba" && password === "ToshiBa@Hardtrac1993") {
            window.location.href = "https://docs.google.com/spreadsheets/d/142wDggP1hWJFONU8PzXynb9ixRLCvKdb6d_ZT6NbW_I/edit#gid=105666129";
        } else if (brandName === "zlade" && password === "HTZ@9900") {
            window.location.href = "https://docs.google.com/spreadsheets/u/1/d/1IUllSYTu8jrH1dOQ1jQl_gctrOr2POXZNk_QBFIeVCc/edit#gid=105666129";
        } else if (brandName === "hardtrac" && password === "hardtrac@1234") {
            window.location.href = "https://docs.google.com/spreadsheets/d/15UMx7BKyIgfWLJ6ea6bRIcIWcdtiCn1CGvAO8wobSK0/edit#gid=1924627899";     
        } else {
            alert("Invalid brand name or password");
        }
    });

    // Toggle password visibility
    document.getElementById("show-password").addEventListener("change", function() {
        var passwordInput = document.getElementById("password");
        if (this.checked) {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
</script>
