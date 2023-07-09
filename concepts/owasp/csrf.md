##How does CSRF work?

### What is CSRF?

An attacker aims to perform a state-changing request by manipulating the victim to perform it. 

### When does this happen?

The victim, their web browser and the target application fails to disnguish a legitimate request from this state-changing request aimed by the attacker.

### Who is vulnerable?

The target server-side web application. The attacker is targeting the server-side application and especially its inability differentiate legitimate request from forged request.

### What does not work?

Doesn't work: A valid session cookie for the request: Session cookie does not help as clicking the attacker's link could execute code on the browser that generates this session cookie. 

### What can you do to prevent this?

1. Additional authentication: Target application asking the end user to authenticate using password, MFA, OTP, etc as an extra confirmation step. Eg: changing user settings, changing payment method, etc asks you for authentication. 

2. Append a valid and supported unique random identifier per request. The client application and the browser maintains a list of such unique identification numbers using SecureRandomGenerator and uses one of them. This list is stored in the user's session.

3. Additional steps to verify such as re:CAPTCHA, asking the user to confirm with a message such as: "Are you sure you want to change the payment method?"

### References

[1] https://owasp.org/www-project-code-review-guide/reviewing-code-for-csrf-issues