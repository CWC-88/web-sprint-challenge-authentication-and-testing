1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.

<!-- One difference is that cookies are for sending and storing arbitrary data, whereas bearer tokens are specifically for sending authorization data.

https://wp-rocket.me/blog/difference-json-web-tokens-vs-session-cookies/ -->

2. What does `bcrypt` do to help us store passwords in a secure manner.

<!-- hash?  -->

3. How are unit tests different from integration and end-to-end testing.

<!-- Unlike end-to-end tests that rely on external components, unit tests are not flaky. ... They have one major advantage over unit tests: they ensure that modules which work well in isolation, also play well together. Integration tests typically focus on a small number of modules and test their interactions. -->
<!-- Integration testing is when you integrate 2 or more units or modules or sub-systems or systems. ... End to End testing is where you go from point a to z and you touch various different points on the way there. -->

4. How _Test Driven Development_ changes the way we write applications and tests.


<!-- we write applications and then if the test fails we wonder what is wrong, even if the app works. and then we try to fix. and then whoever helps us can see what is wrong and then fix it hopefully.  -->