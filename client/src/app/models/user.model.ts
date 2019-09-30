  // Create User Model Class
export class User {
    // properties
    public ID: number;
    public username: string = '';
    public email: string = '';
    public password: string = '';
    
    constructor(ID: number, username: string, email: string, password: string) {
      this.ID = ID;
      this.username = username;
      this.email = email;
      this.password = password;
    }
  }