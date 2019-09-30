  // Create Teams Model Class
  export class Team {
    // properties
    public TeamName: string = '';
    public ManagerName: string= ''
    public ManagerPhone: number=10
    
    constructor(TeamName: string, ManagerName:string, ManagerPhone:number) {
        this.TeamName = TeamName;
        this.ManagerName = ManagerName;
        this.ManagerPhone = ManagerPhone;
      }
    }