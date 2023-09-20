// Your code here
class Polygon  {
    constructor (array) {
        this.array = array
        this.sides = array.length
    }
    get countSides() {
        return this.sides
    }
    get perimeter() {
        let perimeter = this.array.reduce((accumulator, value)=> accumulator + value)
        console.log(perimeter)
        return perimeter
}
}

class Triangle extends Polygon {
   
    
    
    get isValid () {
     let a = this.array[0]
     let b = this.array[1]
     let c = this.array[2]
     
     if ( (a + b) > c && (a+c)>b && (b+c) >a){
        return true
     }
     else {
        return false
     }
    }
}

class Square extends Polygon {
    get area () {
        return this.array[0] * this.array[0]
    }

    get isValid () {
        let a = this.array[0]
     let b = this.array[1]
     let c = this.array[2]
     let d = this.array[3]
     console.log(a,b,c, d)
     if (a===b && a===c && a===d && c===b && b===d){
        return true
     }
     else {
        return false
     }
    }
}


