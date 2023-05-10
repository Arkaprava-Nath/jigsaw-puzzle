

## Available Scripts

In the project directory(Jigsaw-puzzle), you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Approach: 

A puzzle consisting of 4 rows and 4 columns is created using the react-jigsaw-puzzle package. In the jigsawPuzzle component,  the image source is specified.  The rows and columns are to be set to 4 in order to make a 4*4 puzzle. A function in the onSolved method is used that will be called once the puzzle is solved successfully. The user has to arrange the pieces according to the image given beside.As soon as the pieces are arranged to the original message, a congratulations message will replace the heading using useState hooks. 