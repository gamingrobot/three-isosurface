function doVoxel(){
	for(var x=0; x<voxelsize; x++){
	for(var y=0; y<voxelsize; y++){
	for(var z=0; z<voxelsize; z++){
		//current voxel exists
		if (!isEmpty(voxels[getIndex(x,y,z)])){
			//left
			if (x >= 1){
				if(isEmpty(voxels[getIndex(x - 1,y,z)])) {
					addTriangle([x, y, z], [x, y, z + 1], [x, y + 1, z + 1]);
					addTriangle([x, y + 1, z + 1], [x, y + 1, z], [x, y, z]);	
				}
			}
			//front
			if (y >= 1){
				if(isEmpty(voxels[getIndex(x,y - 1,z)])) {
					addTriangle([x + 1, y, z], [x + 1, y, z + 1], [x, y, z + 1]);
					addTriangle([x, y, z + 1], [x, y, z], [x + 1, y, z]);
				}
			}
			//right
			if (x < voxelsize - 1){
				if(isEmpty(voxels[getIndex(x + 1,y,z)])) {
					addTriangle([x + 1, y + 1, z + 1], [x + 1, y, z + 1], [x + 1, y, z]);
					addTriangle([x + 1, y, z], [x + 1, y + 1, z], [x + 1, y + 1, z + 1]);
				}
			}
			//back
			if (y < voxelsize - 1){
				if(isEmpty(voxels[getIndex(x, y + 1, z)])) {
					addTriangle([x, y + 1, z + 1], [x + 1, y + 1, z + 1], [x + 1, y + 1, z]);
					addTriangle([x + 1, y + 1, z], [x, y + 1, z], [x, y + 1, z + 1]);
				}
			}
			//bottom
			if (z >= 1){
				if(isEmpty(voxels[getIndex(x,y,z - 1)])) {
					addTriangle([x, y + 1, z], [x + 1, y + 1, z], [x + 1, y, z]);
					addTriangle([x + 1, y, z], [x, y, z], [x, y + 1, z]);
				}
			}
			//top
			if (z < voxelsize - 1){
				if(isEmpty(voxels[getIndex(x,y,z + 1)])) {
					addTriangle([x + 1, y, z + 1], [x + 1, y + 1, z + 1], [x, y + 1, z + 1]);
					addTriangle([x, y + 1, z + 1], [x, y, z + 1], [x + 1, y, z + 1]);
				}
			}
		}
	}
	}
	}
}