// Herança

function Material(name, price) {
  this.name = name;
  this.price = price;

}

Material.prototype.increase = function (value) {
  this.price += value;
};

// Muito semelhante a Herança e o super()
// Não herda os metodos 
function Shirt(name, price, color) {
  Material.call(this, name, price);
  this.color = color;
}

Shirt.prototype = Object.create(Material.prototype);
Shirt.prototype.constructor = Shirt;

const shirt = new Shirt('Regata', 7.5, 'Black');
console.log(shirt);
// shirt.increase(2);
// console.log(shirt);

function Mug(name, price, material) {
  Material.call(this, name, price);
  this.material = material;
}

Mug.prototype = Object.create(Material.prototype);
Mug.prototype.constructor = Mug;

const mug = new Mug('Caneca', 5, 'Porcelana');
console.log(mug);
