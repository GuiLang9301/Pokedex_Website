"use strict";

/*
<header>
      <h1 class="bigTitle">Pokedex</h1>
      <nav class="nav">
        <ul class="ul">
          <li><a href='#bug'>Bug</a></li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
          <li>Bug</li>
        </ul>
      </nav>
    </header>

*/
/////////create the header section///////////

//sort the pokemon array by alphabetical order

function sortName() {
  return pokedex.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
}
sortName();
console.log(pokedex);

//create the array of types using foreach

const duplicatedTypes = [];

function getTypes(pokedex) {
  pokedex.forEach((pokemon) => {
    duplicatedTypes.push(...pokemon.type);
  });
  return duplicatedTypes;
}
getTypes(pokedex);

const uniqueTypes = [];
function getUniqueTypes(duplicatedTypes) {
  duplicatedTypes.forEach((type) => {
    if (!uniqueTypes.includes(type)) {
      uniqueTypes.push(type);
    }
  });
  return uniqueTypes;
}
getUniqueTypes(duplicatedTypes);
// console.log(uniqueTypes);
const uniqueSortedTypes = uniqueTypes.sort();
// console.log(uniqueSortedTypes);

//create the anchor element
function createAnchor(type) {
  const $a = document.createElement("a");
  $a.classList.add("list-link");
  $a.textContent = type;
  $a.setAttribute("href", `#${type}`);
  return $a;
}

//create the list element
function createList(type) {
  const $li = document.createElement("li");
  $li.append(createAnchor(type));
  return $li;
}

//create ul element
function createUl(uniqueSortedTypes) {
  const $ul = document.createElement("ul");
  $ul.classList.add("ul");
  for (const type of uniqueSortedTypes) {
    $ul.append(createList(type));
  }
  return $ul;
}

function buildNav(uniqueSortedTypes) {
  const $nav = document.querySelector(".nav");
  $nav.append(createUl(uniqueSortedTypes));
}

buildNav(uniqueSortedTypes);

/*
<div class="sum-section">
        <h2 class="type">
          Type:<span class="typeName">Bug</span>
          <span class="typeSum">(77)</span>
        </h2>
        <p class="typeDetail">
          <span class="typeDetail-1">
            Total HP:<span class="typeHP">4350</span>
          </span>

          <span class="typeDetail-2">
            Total Attack:<span class="typeAttack">4350</span>
          </span>
        </p>
        <a class="top" href="#">Back to Top</a>
      </div>
       */

////create the sum section/////

//create filtered array according to the type
function filterArray(type) {
  return pokedex.filter((pokemon) => pokemon.type.includes(type));
}
// console.log(filterArray("Poison"));

//create typename element
function createTypeName(type) {
  const $span0 = document.createElement("span");
  $span0.textContent = type;
  return $span0;
}

//create typesum element
function createTypeSum(type) {
  const $span1 = document.createElement("span");
  $span1.classList.add("typesum");
  $span1.textContent = `(${filterArray(type).length})`;

  return $span1;
}

//create h2 element
function createH2(type) {
  const $h2 = document.createElement("h2");
  $h2.classList.add("type");
  $h2.textContent = "Type:";
  $h2.setAttribute("id", `${type}`);
  $h2.append(createTypeName(type), createTypeSum(type));
  return $h2;
}

//create function that sums the total hp
function getTotalHP(filterArray) {
  return filterArray.reduce((accumulator, pokemon) => {
    return accumulator + pokemon.base.HP;
  }, 0);
}
// console.log(getTotalHP(filterArray("Poison")));

//create function that sums the total attack
function getTotalAttack(filterArray) {
  return filterArray.reduce((accumulator, pokemon) => {
    return accumulator + pokemon.base.Attack;
  }, 0);
}

// console.log(getTotalHP(pokedex));
console.log(getTotalAttack(pokedex));

//create typeHP
function createTypeHP(filterArray) {
  const $span0 = document.createElement("span");
  $span0.classList.add("typeHP");
  $span0.textContent = getTotalHP(filterArray);
  return $span0;
}

//create typeattack
function createTypeAttack(filterArray) {
  const $span1 = document.createElement("span");
  $span1.classList.add("typeAttack");
  $span1.textContent = getTotalAttack(filterArray);
  return $span1;
}

//create type detail-1 element

function createTypeDetail1(filterArray) {
  const $span = document.createElement("span");
  $span.classList.add("typeDetail-1");
  $span.textContent = "Total HP:";
  $span.append(createTypeHP(filterArray));
  return $span;
}

//create type detail-2 element

function createTypeDetail2(filterArray) {
  const $span = document.createElement("span");
  $span.classList.add("typeDetail-2");
  $span.textContent = "Total Attack:";
  $span.append(createTypeAttack(filterArray));
  return $span;
}

//create type detail

function createTypeDetail(filterArray) {
  const $p = document.createElement("p");
  $p.classList.add("typeDetail");
  $p.append(createTypeDetail1(filterArray), createTypeDetail2(filterArray));
  return $p;
}

//create the anchor link back to top
function createTop() {
  const $a = document.createElement("a");
  $a.classList.add("top");
  $a.textContent = "Back to Top";
  $a.setAttribute("href", "#");
  return $a;
}

//create the sum-section

function createSumSection(type, filterArray) {
  const $div = document.createElement("div");
  $div.classList.add("sum-section");
  $div.append(createH2(type), createTypeDetail(filterArray), createTop());
  return $div;
}

//create the card

/* <div class="card">
          <h3 class="name">Accelogor</h3>
          <div class="img-container">
            <a href='xxx'><img
              class="sprite"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              alt="Accelogor"
            /></a>
          </div>
          <div class="base">
            <p>HP:<span class="hp">80</span></p>
            <p>Attack:<span class="attack">70</span></p>
            <p>Defense:<span class="defense">40</span></p>
            <p>Sp.attack:<span class="sp-attack">100</span></p>
            <p>Sp.defence:<span class="sp-defense">60</span></p>
            <p>Speed:<span class="speed">145</span></p>
          </div>
        </div> */

//create h3

function createH3(name) {
  const $h3 = document.createElement("h3");
  $h3.classList.add("name");
  $h3.textContent = name;
  return $h3;
}

//create image element

function createImage(sprite, name) {
  const $img = document.createElement("img");
  $img.classList.add("sprite");
  $img.setAttribute("src", `${sprite}`);
  $img.setAttribute("alt", `${name}`);
  return $img;
}

//create link to the images
function createLink(sprite, name, url) {
  const $a = document.createElement("a");
  $a.classList.add("url");
  $a.setAttribute("href", `${url}`);
  $a.setAttribute("target", "_blank");

  $a.append(createImage(sprite, name));
  return $a;
}

//create img-container element
function createImgContainer(sprite, name, url) {
  const $div = document.createElement("div");
  $div.classList.add("img-container");
  $div.append(createLink(sprite, name, url));
  return $div;
}

//create hp element

function createHP(hp) {
  const $span = document.createElement("span");
  $span.classList.add("hp");
  $span.textContent = hp;
  return $span;
}

function createHPContainer(hp) {
  const $p = document.createElement("p");
  $p.textContent = "HP: ";
  $p.append(createHP(hp));
  return $p;
}

//create attack element
function createAttack(attack) {
  const $span = document.createElement("span");
  $span.classList.add("attack");
  $span.textContent = attack;
  return $span;
}

function createAttackContainer(attack) {
  const $p = document.createElement("p");
  $p.textContent = "Attack: ";
  $p.append(createAttack(attack));
  return $p;
}

//create defense element
function createDefense(defense) {
  const $span = document.createElement("span");
  $span.classList.add("defense");
  $span.textContent = defense;
  return $span;
}

function createDefenseContainer(defense) {
  const $p = document.createElement("p");
  $p.textContent = "Defense: ";
  $p.append(createDefense(defense));
  return $p;
}

//create spdefense element
function createSpDefense(spdefense) {
  const $span = document.createElement("span");
  $span.classList.add("sp-defense");
  $span.textContent = spdefense;
  return $span;
}

function createSpDefenseContainer(spdefense) {
  const $p = document.createElement("p");
  $p.textContent = "Sp.defense: ";
  $p.append(createSpDefense(spdefense));
  return $p;
}

//create spattack element
function createSpAttack(spattack) {
  const $span = document.createElement("span");
  $span.classList.add("sp-attack");
  $span.textContent = spattack;
  return $span;
}

function createSpAttackContainer(spattack) {
  const $p = document.createElement("p");
  $p.textContent = "Sp.attack: ";
  $p.append(createSpAttack(spattack));
  return $p;
}

//create speed element
function createSpeed(speed) {
  const $span = document.createElement("span");
  $span.classList.add("speed");
  $span.textContent = speed;
  return $span;
}

function createSpeedContainer(speed) {
  const $p = document.createElement("p");
  $p.textContent = "Speed: ";
  $p.append(createSpeed(speed));
  return $p;
}

//create base div

function createBase(hp, attack, defense, spdefense, spattack, speed) {
  const $div = document.createElement("div");
  $div.classList.add("base");
  $div.append(
    createHPContainer(hp),
    createAttackContainer(attack),
    createDefenseContainer(defense),
    createSpDefenseContainer(spdefense),
    createSpAttackContainer(spattack),
    createSpeedContainer(speed)
  );
  return $div;
}

//create card

// function createCard(
//   name,
//   sprite,
//   hp,
//   attack,
//   defense,
//   spdefense,
//   spattack,
//   speed
// ) {
//   const $div = document.createElement("div");
//   $div.classList.add("card");
//   $div.append(
//     createH3(name),
//     createImgContainer(sprite, name),
//     createBase(hp, attack, defense, spdefense, spattack, speed)
//   );
//   return $div;
// }

function createCard(pokedex) {
  const $div = document.createElement("div");
  $div.classList.add("card");
  $div.append(
    createH3(pokedex.name),
    createImgContainer(pokedex.sprite, pokedex.name, pokedex.url),
    createBase(
      pokedex.base.HP,
      pokedex.base.Attack,
      pokedex.base.Defense,
      pokedex["base"]["Sp. Defense"],
      pokedex["base"]["Sp. Attack"],
      pokedex.base.Speed
    )
  );
  return $div;
}

//create card section

function createCardSection(pokedex) {
  const $div = document.createElement("div");
  $div.classList.add("card-section");

  for (const pokemon of pokedex) {
    $div.append(createCard(pokemon));
  }
  return $div;
}

//build the main

function buildMain(uniqueSortedTypes) {
  const $main = document.querySelector(".main");
  const $fragment = document.createDocumentFragment();
  for (const uniqueSortedType of uniqueSortedTypes) {
    const filteredArrays = filterArray(uniqueSortedType);
    $fragment.append(
      createSumSection(uniqueSortedType, filteredArrays),
      createCardSection(filteredArrays)
    );
  }
  $main.append($fragment);
}

buildMain(uniqueSortedTypes);
