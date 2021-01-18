// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2){

  if(num1 > num2)
  {
    return num1;
  }
  else if(num1 == num2)
  {
    return num1;
  }
  else{
    return num2;
  }
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words)
{
  if(words.length == 0)
  {
    return null;
  }
  else
  {
    var temp = "";
  for(let i=0;i<words.length;i++)
  {
    if(words[i].length > temp.length)
    {
      temp = words[i];
    }
  }
  return temp;
}
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers)
{
 var temp = 0;
 if(numbers.length == 0)
 {
   return 0;
 }
 else if(numbers.length == 1)
 {
  temp = temp + numbers[0];
  return temp;
 }
 else
 {
  for(let i = 0; i<= numbers.length; i++)
  {
    temp = numbers.reduce(function(a, b){
      return a + b; }, 0);
  }
  return temp;
 }
}
//3.1 Add
function add (numbers)
{
  if(numbers.length == 0)
  {
    return 0;
  }
  else
  {
    var nTotal=0;
    for(let i = 0;i<numbers.length;i++)
    {
      if(typeof(numbers[i]) =="object" || typeof(numbers[i]) == [])
      {
        return "Unsupported data type sir or ma'am";
      } 
      if(typeof(numbers[i]) =="number")
      {
        nTotal +=numbers[i]; 
      }
      else if(typeof(numbers[i]) =="string")
      {
        nTotal +=numbers[i].length; 
      }
      else if(typeof(numbers[i]) =="boolean")
      {
        if(numbers[i]==true)
        {
          nTotal += 1;
        }
        else
        {
          nTotal += 0;
        }
      }     
    }
    console.log(nTotal)
    return nTotal;
  }
}




// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg)
{
  var temp = 0;
  var mid = 0;
  var num = numbersAvg.length;
  if(numbersAvg.length == 0)
  {
    return null;
  }
  else
  {
    for(let i = 0; i<= num; i++)
    {
      temp = numbersAvg.reduce(function(a, b){
        return a + b; }, 0);
    }
      mid = (temp/numbersAvg.length);
  } 
  return mid;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr)
{
  var temp = 0;
  var add = 0;
  var avg = 0;
  var num = wordsArr.length;
  if(wordsArr.length == 0)
  {
     return null
  }
  else
  {
    if(wordsArr.length == 1)
    {
      return wordsArr[0];
    }
    else
    {
      for(let i = 0; i<= num; i++)
      {
        temp = wordsArr[i].length;
        add = add + temp;
      }
    }
    add = add/wordsArr.length;
    return add;
  }

  if(wordsArr.length != 0)
  {
    avg = add/wordsArr.length;
    return avg;
  }
}


// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

  let uniqueArr = [];
function uniqueArray(wordsUnique)
{
  if(wordsUnique.length == 0)
  {
    return null;
  }
 var len = wordsUnique.length;
  out=[],
  obj={};
  
  for (var x=0; x<len; x++) {
    obj[wordsUnique[x]]=0;
  }
   for (x in obj) {
    out.push(x);
  }
  return out;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind)
{
  var len = wordsFind.length;
  if(wordsFind.length == 0)
  {
    return null;
  }
  else
  {
    if(wordsFind.includes())
    {
      return true;
    }
    else{
      return false;
    }
  }
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount)
{
  let counts = {};
  if(wordsCount.length == 0)
  {
    return 0;
  }

 for(let i =0; i < wordsCount.length; i++)
 { 
    if (counts[wordsCount[i]])
    {
      counts[wordsCount[i]] += 1
    }
    else
    {
      counts[wordsCount[i]] = 1
    }
  }  
    for (let prop in counts)
    {
      if(counts[prop] == 0)
      {
        return 0;
      }
      else if(counts[prop] == 1)
      { 
        return 1;
      }
      else if (counts[prop] == 5)
      {
        return prop;
      }
    }
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix)
{
  let len = matrix.length;
  for(var i = 0; i < len; i++)
  {
    for(var j = 0; j<i; j++)
      {
        var element = matrix[0][0];
        if(element ==+ matrix[i][j])
        {
          return 1;
        }
      }
  }
}
