document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var brandName = document.getElementById("brand-name").value.toLowerCase(); // Convert input brand name to lowercase
        var password = document.getElementById("password").value;

        console.log("Brand Name:", brandName); // Debugging
        console.log("Password:", password); // Debugging

        // Simulate authentication
        // Replace this with actual backend authentication logic
        if (brandName === "bajaj" && password === "HTB@4400") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1UYQQilejDaiTGhECV9FrDsL-Y1hsybluxvxPeou52B8/edit#gid=105666129";
        } else if (brandName === "itel" && password === "smobile@2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1jAvWFb5CWcK4RrLgBykMjdyBWHDxeUK-C7kIYeJtqAI/edit#gid=105666129";
        } else if (brandName === "iair" && password === "iairtech@2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1avTJqIG5_UuKPzjN9Arbm5QYNZN1jwEVfHYm_FnKl9k/edit#gid=105666129";
        } else if (brandName === "bergner" && password === "S&S@bergner") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1Mwe-xXa9cJ1ELex1vCFbShwjA1CGs-Unt3vpiagF9l0/edit#gid=105666129";
        } else if (brandName === "hawkins" && password === "cookware@2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1y9y4HBts0iqO4B1ffYPy5QaMQ5GOEgrnRj4rzz5CcT0/edit#gid=105666129";
        } else if (brandName === "hul" && password === "UNILIVER2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1xLlsRt6eGDWhE_dhO3WJEgpG8P_bNJ9YFCdny-Sa1eE/edit#gid=105666129";
        } else if (brandName === "lenovo" && password === "1993@LenovoHardTrac") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1Ge7SiUUlqBjKBvYoFIe0eGmp9mdyhKqbxcV2q3acUm0/edit#gid=105666129";
        } else if (brandName === "orange" && password === "S&P@orange") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1y_0BHVDdkJABfj9i4yi-JzoU3ONJ9S4wzNCJtEssEjg/edit#gid=105666129";
        } else if (brandName === "orient" && password === "orient@1234") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1CR8TgkJsPy5_zg3hawOIt7OHag1Gd7Laa4DGyFPRr50/edit#gid=105666129";
        } else if (brandName === "racold" && password === "ARISTON2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1ehkRJ-KSwHrnEvplfC96vwV8dnyPKiVLVSK0FX5yoGI/edit#gid=105666129";
        } else if (brandName === "luminous" && password === "STEP@2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1-zIqsHQGV6ily_b6QYp2h1bMR010hFCfUTvuwsDoUoQ/edit#gid=105666129";
        } else if (brandName === "realme" && password === "Hardtrac@1993RealME") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1pNQ10ciMCJJFWIxiu8A3TW20Z565RVFCTETPVOua0PQ/edit#gid=105666129";
        } else if (brandName === "rapoo" && password === "RapooM650") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1qGJ2lIKmdgyFGky_3ObqZkwPaeF2FBdY10iSJO3wSM8/edit#gid=105666129";
        } else if (brandName === "singer" && password === "SHT@2200") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1bp9S6gzrp0P5UF_3pY4XLKVAbsLvo_dvxz4mJx1zZNY/edit#gid=105666129";
        } else if (brandName === "sunflame" && password === "vgaurd2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1eMGrXKuuglJhhXMOgZhNKOp6xaXcM9AVBhOd2vq51Zw/edit#gid=105666129";    
        } else if (brandName === "suryaflame" && password === "surya2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/19aUyMTXtBiAOEJJbcTxRIARRuOmeXHNFUjaeR_SvcDE/edit#gid=105666129";
        } else if (brandName === "tecno" && password === "Tecno@22324") {
            window.location.href = "https://docs.google.com/spreadsheets/d/11KxtZqz0dVek2g8S94UjGnj-NS44I80iZiP0Z3W_yNk/edit#gid=105666129";
        } else if (brandName === "vinod" && password === "MasterChefVinod#2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/14_HJdwXGtRyvBxo4OgaM5ydCdjtqOconAZ20iK8-P4s/edit#gid=105666129";
        } else if (brandName === "wipro" && password === "wipro@1234") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1Q0LdpfIILhLn-ViRYNVUb38jxSctaDjL--k12viuF4E/edit#gid=105666129";
        } else if (brandName === "wonderchef" && password === "HTW17WCF") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1ZCwneTLrTcGEu91HvufLPCDd5ki8W76YplccYbPwteU/edit#gid=105666129";
        } else if (brandName === "lapcare" && password === "LapcareL999") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1u2s6GwDMmbJKQQ0dn_IeUzIjo2c6mtvUgDG-AHXbiLg/edit#gid=105666129";
        } else if (brandName === "lava" && password === "lavainternational@2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1NF-tQ91AjMI3KPC3Xhmdk0uSYF46c-JF462DLBSxkwY/edit#gid=105666129";
        } else if (brandName === "nokia" && password === "hmdglobal@2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1kzowP6A8Qbvj-3lcYTcLVclJB4VasCRRK3ba1eUlwy8/edit#gid=105666129";
        } else if (brandName === "philips" && password === "HTW17SP09") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1WNvU6afZvVEVQUr5_wmfwptGYeR5oYvSlmxbsC0MCvo/edit#gid=105666129";
        } else if (brandName === "toshiba" && password === "ToshiBa@Hardtrac1993") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1l4he9tqiCah-1KwFK7U9nzXHBB0Fbf5_caeORfqYCto/edit#gid=105666129";
        } else if (brandName === "zlade" && password === "HTZ@9900") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1KFDz0zJeY3KPTCs6UpoxAkJl4Tl3kcZQYhT3gRrQ8us/edit#gid=105666129";
        } else if (brandName === "hardtrac" && password === "hardtrac@1234") {
            window.location.href = "https://docs.google.com/spreadsheets/d/15UMx7BKyIgfWLJ6ea6bRIcIWcdtiCn1CGvAO8wobSK0/edit#gid=1924627899";     
        } else if (brandName === "amaze" && password === "UNIT@2024") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1xx-Jou1wQx0mIe-n6kr6TcF6wGWWu3WJiQSJHebUM6A/edit#gid=105666129";
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
