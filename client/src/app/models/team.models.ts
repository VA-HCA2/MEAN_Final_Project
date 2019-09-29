  // Create Teams Model Class
  export class Team {
    // properties
    public Name: string = '';
    public league: string = ''
    public ManagerName: string= ''
    public ManagerPhone: number=10
    
    constructor(Name: string,ManagerName:string,ManagerPhone:number) {
        this.Name = Name;
        this.ManagerName = ManagerName;
        this.ManagerPhone = ManagerPhone;
      }
    }