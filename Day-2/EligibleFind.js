// Check if a person is eligible to vote (age ≥ 18 and has ID).

const voteEligible = (age, id) =>{
    if(age >= 18 && id == true){
        console.log("Eligible for Vote");
        
    }
    else{
        console.log("Not Eligible for vote ");
        
    }
}
voteEligible(20 , true)
voteEligible(18 , false)
voteEligible(18 , true)