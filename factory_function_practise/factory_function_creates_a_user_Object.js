const createuser = ({name,age,role = "user"}) => {
    return {
      name,
      age,role,
      ifAdmin(){
        return this.role === 'admin'
      },
      changeRole(newrole){
        this.role = newrole;
      },
    };
}
const user1 = createuser({name:"shriram",age:18});
console.log(user1)
console.log(user1.ifAdmin())
 
user1.changeRole('admin')
console.log(user1.role)
console.log(user1.ifAdmin())