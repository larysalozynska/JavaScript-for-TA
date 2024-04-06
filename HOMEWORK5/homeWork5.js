//task1
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
    }

function propsCount(object) {
    let keysArray = Object.keys(object);
    return keysArray.length; 
};

console.log(propsCount(mentor));

//task2 
let testObject = {
    key1: 'value1',
    key2: 2,
    key3: true,
    key4: false,
    key5: {
        param: 'object in object'
    }
}

function showProps(obj) {
    let keysArr = Object.keys(obj);
    let valueArr = Object.values(obj);
    let odjArr = [[keysArr], [valueArr]];
    return odjArr;
    
}

console.log(showProps(testObject))


//task3

class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname
    }

    showFullName() {
        return `${this.name} ${this.surname}`
    }
}

class Student extends Person {
    constructor (name, surname, year) {
        super (name, surname);
        this.year = year;
    }

    showFullName(midleName) {
        return `${this.name} ${this.surname} ${midleName}`;
    }

    showCourse() {
        let currentYear = 2017
        let course = (currentYear - this.year)+1;
        if (course <=0 || course>6 ) {
            throw new Error ('Check the year of entering once again')
        }
        return course; 
    }
}


let std1 = new Student('Larysa', 'Lozynska', 2015)
console.log(std1.showFullName('Yaloslavivna'))
console.log('Current coutse: ' + std1.showCourse())


//task4

class Worker {
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this.salary = this.dayRate * this.workingDays
    }

    _experience = 1.2;

    get showExp() {
        return this._experience
    }

    set setExp (value) {
        return this._experience = value
    }

    showSalary() {
        return `${this.fullName} salary: ${this.salary}`
    }

    get salaryWithExp () {
        return this.salary * this._experience;
    }
    showSalaryWithExperience() {
        return `${this.fullName} salary: ${this.salaryWithExp}`
    }


}

let worker1 = new Worker ('Larysa L', 20, 23)
console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log('New experience: ' + worker1.showExp);
worker1.setExp = 1.5;
console.log('New experience: ' + worker1.showExp);
console.log(worker1.showSalaryWithExperience());

let worker2 = new Worker ('Tom Tomson', 48, 22)
console.log(worker2.fullName);
console.log(worker2.showSalary());
console.log('New experience: ' + worker2.showExp);
worker2.setExp = 1.5;
console.log('New experience: ' + worker2.showExp);
console.log(worker2.showSalaryWithExperience());

let worker3 = new Worker ('Andy Ander', 29,23)
console.log(worker3.fullName);
console.log(worker3.showSalary());
console.log('New experience: ' + worker3.showExp);
worker3.setExp = 1.5;
console.log('New experience: ' + worker3.showExp);
console.log(worker3.showSalaryWithExperience());

let workersArray = [
    worker3,
    worker2,
    worker1,
    new Worker ('Jon Jon', 30, 15)
]

let sortedWrksArr = workersArray.sort((a,b)=> a.salaryWithExp-b.salaryWithExp)

console.log('Sorted salary:');
sortedWrksArr.forEach(worker => {
    console.log(worker.showSalaryWithExperience())
})


//task5

class GeometricFigure {
    getArea() {
        return 0;
        }
        
    toString() {
        return Object.getPrototypeOf(this).constructor.name; 
    }
}

class Triangle extends GeometricFigure {
    constructor(sideA, sideB, sideC){
        super ();
        this.sideA=sideA;
        this.sideB=sideB;
        this.sideC=sideC;
    }

    getArea() {
        if ((this.sideB+this.sideC>this.sideA) && (this.sideB+this.sideA>this.sideC) && (this.sideA+this.sideC>this.sideB)) { //умова існування трикутника

            if(this.sideC**2 === this.sideA**2 + this.sideB**2){
                //площа прямокутного трикутника, напр. a=3, b=4, c=5
                let areaRightTriangle = (this.sideA*this.sideB)/2; 
                let convertedAreaRightTriangle = areaRightTriangle.toFixed(3);
                return convertedAreaRightTriangle;
        
            }else if(this.sideA === this.sideB && this.sideB === this.sideC){
                //проща рівносторонього трикутника 
                let areaEquilateralTriangle = (Math.pow(this.sideA, 2) * Math.sqrt(3)) / 4;
                let convertedAreaEquilateralTriangle = areaEquilateralTriangle.toFixed(3);
                return convertedAreaEquilateralTriangle;
        
            }else {
                //площа довільного трикутника
                let p = (this.sideA + this.sideB + this.sideC) / 2; //формула Герона 
                let areaAbitraryTriangle = Math.sqrt(p*(p-this.sideA)*(p-this.sideB)*(p-this.sideC));
                let convertedAreaAbitraryTriangle = areaAbitraryTriangle.toFixed(3);
                return convertedAreaAbitraryTriangle;
            }
        
        }else {
            console.log ('Incorrect data')
        }
        
    }
}

class Square extends GeometricFigure {
    constructor(sideA){
        super();
        this.sideA=sideA;
    }

    getArea(){
        let areaSquare = Math.pow(this.sideA, 2)
        return areaSquare;
    }
}

class Circle extends GeometricFigure {
    constructor(radius){
        super();
        this.radius=radius;
    }

    getArea(){
        const pi = 3.14;
        let areaCiecle = pi * Math.pow(this.radius, 2);
        return areaCiecle;

    }    
}

function handleFigures(figures) {
    for (element of figures) {
        if (element instanceof GeometricFigure) {
            console.log (`GeometricFigure: ${element.toString()} - area: ${element.getArea()}`)

        }else {
            throw new Error ('The objects is not instanceof GeometricFigure')
        }

    }

}

const figures = [new Triangle(2,2,2), new Square(7), new Circle(5)];
handleFigures(figures);
