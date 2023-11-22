/*
Swaying photo gallery - scroll event
@wakana-k
https://codepan.io/wakana-k/pen/WNLrWMm
Created on AUGUST 29, 2023
Copyright (C) 2023 by Wakana Y.K.
*/
/*
Related works :
Portforio design @wakana-k - https://codepan.io/wakana-k/pen/BaxKKvE
Swaying photo gallery - hover event @wakana-k - https://codepan.io/wakana-k/pen/oNJxbPw
*/
"use strict";
(function () {
    window.onload = () => {
        const obj = document.querySelector("#gallery");
        const time = 10000;
        function animStart() {
            if (obj.classList.contains("active") == false) {
                obj.classList.add("active");
                setTimeout(() => {
                    animEnd();
                }, time);
            }
        }
        function animEnd() {
            obj.classList.remove("active");
            obj.offsetwidth;
        }
        document.addEventListener("scroll", function () {
            animStart();
        });
        window.addEventListener("resize", animStart);
        animStart();
    };
})();