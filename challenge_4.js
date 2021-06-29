/**
 * OPTIMIZATIONS
 * 
 * optimize this function as well as possible!
 * 
 * Difficulty: hard
 * 
 */

function tak( x, y, z) {
 if (y < x)
   return tak( 
        tak(x-1, y, z),
        tak(y-1, z, x),
        tak(z-1, x, y)
      );
 else
   return z;
}