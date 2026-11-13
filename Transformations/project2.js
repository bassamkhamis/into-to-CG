// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The transformation first applies scale, then rotation, and finally translation.
// The given rotation value is in degrees.
function GetTransform( positionX, positionY, rotation, scale )
{
	const angle = Math.PI * (rotation / 180.0)
	const c = Math.cos(angle)
	const s = Math.sin(angle)

	const scale_matrix =   		[
									[scale, 0, 0],
									[0, scale, 0],
									[0, 0    , 1]
								]
	const rotation_matrix = 	[
									[c, -s, 0],
									[s, c , 0],
									[0, 0 , 1]
							    ]
	const translation_matrix = [
									[1, 0, positionX],
									[0, 1, positionY],
									[0, 0, 1]
								]						

	const scaleThenRotate          = multiply(rotation_matrix, scale_matrix)
  	const scale_rotation_translate = multiply(translation_matrix, scaleThenRotate)

	return toColMajor(scale_rotation_translate)
}

// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The arguments are transformation matrices in the same format.
// The returned transformation first applies trans1 and then trans2.
function ApplyTransform( trans1, trans2 )
{
	const m1 = fromColMajor(trans1)
	const m2 = fromColMajor(trans2) 

	return toColMajor(multiply(trans2, trans1))
}

// Helper: to covert matrix transform to flat 
function toColMajor(m) {
  const n = m.length;
  const flat = new Array(n * n);
  for (let col = 0; col < n; col++) {
    for (let row = 0; row < n; row++) {
      flat[col * n + row] = m[row][col];
    }
  }
  return flat;
} 

// Hepler: to convert flat array to matrix
function fromColMajor(flat) {
  const n = Math.sqrt(flat.length);
  const m = [];
  for (let row = 0; row < n; row++) {
    m[row] = [];
    for (let col = 0; col < n; col++) {
      m[row][col] = flat[col * n + row];
    }
  }
  return m;
}

// Helper: multiply two 3x3 matrices (a * b)
function multiply(a, b) {
  const result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      result[row][col] =
        a[row][0] * b[0][col] +
        a[row][1] * b[1][col] +
        a[row][2] * b[2][col];
    }
  }
  return result;
}