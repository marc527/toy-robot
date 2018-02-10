# Toy Robot
## System requirements
1. npm
2. Chrome 6.0+ (prefered)
## Install dependencies
- npm install
## Start
- npm run start
## Example Input and Output:
### Example a

    PLACE 0,0,NORTH
    MOVE
    REPORT

Expected output:

    0,1,NORTH

### Example b

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

### Example c

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Expected output

    3,3,NORTH
