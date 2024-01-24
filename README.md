## Display countdown 10 to 1 ad display message "Happy Independence day"

1. Declared 2 HTML div elements .

- First div with id="countdown" to display countdown.
- Second div with id="message" to display message as "Happy Independence day"

2. javascript file callback.js file imported in html file insdie script tag.
3. Declared a constant variable startCountdown and assign that to a arrow function.
4. Used callback as parameter.
5. Declared let count = 10; initilize the countdown number starts from 10.
6. updateCountdown function to display countdown.
7. document.getElementById("countdown").textContent = count; is used to display currentvalueof count.
8. and count--; decrements the count to 1.
9. if (count >= 0); if block check if countdown is greater than or equal to 0 . if greater than 0 function gets called after 1 sec through settimeout.
10. When countdown reached 0 else block callback fun executed that is showmessage funtion .
