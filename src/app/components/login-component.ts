export class LoginAuthComponent {
    loginEmail: string;
    loginPass: string;

    setEmail( email: string ): void {
        this.loginEmail = email;
    }

    setPass( pass: string ): void {
        this.loginPass = pass;
    }
}
