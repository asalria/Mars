// Rover Object Goes Here
// ======================
var rover={
  direction: "N",
  x:0,
  y:0,
  travelLog: [[0,0]]
};

var array = ["r","f","f","r","f","f","l","f","r","f","f"];


// ======================
function turnLeft(rover){
  switch(rover.direction)
  {
    case ("N"):
      rover.direction = "W";
    break;
    case ("S"):
      rover.direction = "E";
    break;
    case ("E"):
      rover.direction = "N";
    break;
    case ("W"):
      rover.direction = "S";
    break;
  }
  rover.travelLog.push([rover.x,rover.y]);
  console.log(rover.direction);
}

function turnRight(rover){
  switch(rover.direction)
  {
    case ("N"):
      rover.direction = "E";
    break;
    case ("S"):
      rover.direction = "W";
    break;
    case ("E"):
      rover.direction = "S";
    break;
    case ("W"):
      rover.direction = "N";
    break;
  }
  rover.travelLog.push([rover.x,rover.y]);
  console.log(rover.direction);
}

function moveForward(rover){
  switch(rover.direction)
  {
    case ("N"):
    if(rover.y>0){
      rover.y = rover.y-1;
    }
    break;
    case ("S"):
    if(rover.y<10){
      rover.y = rover.y+1;
    }
    break;
    case ("E"):
    if(rover.x<10){
      rover.x = rover.x+1;
    }
    break;
    case ("W"):
    if(rover.x>0){
      rover.x = rover.x-1;
    }
    break;
  }
  rover.travelLog.push([rover.x,rover.y]);
  console.log(rover.x);
  console.log(rover.y);
}

function moveBackwards(rover){
  switch(rover.direction)
  {
    case ("N"):
    if(rover.y>0){
      rover.y = rover.y+1;
    }
    break;
    case ("S"):
    if(rover.y<10){
      rover.y = rover.y-1;
    }
    break;
    case ("E"):
    if(rover.x<10){
      rover.x = rover.x-1;
    }
    break;
    case ("W"):
    if(rover.x>0){
      rover.x = rover.x+1;
    }
    break;
  }
  rover.travelLog.push([rover.x,rover.y]);
  console.log(rover.x);
  console.log(rover.y);
}

function movements(array){

  for(var i=0;i<array.length;i++)
  {
    switch(array[i])
    {
      case ("f"):
      moveForward(rover);
      break;
      case ("r"):
      turnRight(rover);
      break;
      case ("l"):
      turnLeft(rover);
      break;
    }
  }
}
