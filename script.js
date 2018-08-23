class Person {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }

  eat(food) {
    return this.name + " just ate " + food
  }

  render() {
    var div = document.createElement("div") // <div></div>
    var img = document.createElement("img")
    var h3 = document.createElement("h3") // <h3></h3>
    var p = document.createElement("p")

    h3.innerText = this.name
    p.innerText = "This is self introduction for " + this.name

    div.setAttribute("class", "employee " + this.gender)
    div.appendChild(img)
    div.appendChild(h3)
    div.appendChild(p)
    return div
  }
}

var employees = [
  new Person("Sung-ae", "female"),
  new Person("Emi", "female"),
  new Person("Ziyan", "male"),
  new Person("Erika", "female"),
  new Person("Sayuri", "female"),
]

var app = document.getElementById("app")



for (var employee of employees) {
  var div = employee.render()
  app.appendChild(div)
}



