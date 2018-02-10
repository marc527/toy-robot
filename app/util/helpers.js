function isFloat(n){
    return n.toString().indexOf('.') != -1;
}

export function validatePosition (pos) {
  return !isFloat(pos) && parseInt(pos) <= 4 && parseInt(pos) >= 0 ? true : false;
}

export function calculateNextDirection (direction, leftOrRight) {

  let next_direction = direction

  switch (direction) {
    case 'north':
      leftOrRight == 'left' ? next_direction = 'west' : next_direction = 'east'
      break;
    case 'south':
      leftOrRight == 'left' ? next_direction = 'east' : next_direction = 'west'
      break;
    case 'west':
      leftOrRight == 'left' ? next_direction = 'south' : next_direction = 'north'
      break;
    case 'east':
      leftOrRight == 'left' ? next_direction = 'north' : next_direction = 'south'
      break;
  }

  return next_direction
}
