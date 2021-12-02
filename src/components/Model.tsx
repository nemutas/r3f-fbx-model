import React, { VFC } from 'react';
import * as THREE from 'three';
import { useFBX, useMatcapTexture } from '@react-three/drei';
import { useAnimation } from '../libs/useAnimation';
import { publicPath } from '../libs/utils';

export const Model: VFC = () => {
	const fbx = useFBX(publicPath('/assets/ybot.fbx'))
	const ref = useAnimation('/assets/', ['ybot', 'belly_dancing', 'samba_dancing', 'goofy_running'])

	const [matcapSurface] = useMatcapTexture('F75F0B_461604_9A3004_FB9D2F', 512)
	const [matcapJoint] = useMatcapTexture('28292A_D3DAE5_A3ACB8_818183', 512)

	const matSurface = new THREE.MeshMatcapMaterial({ matcap: matcapSurface })
	const matJoint = new THREE.MeshMatcapMaterial({ matcap: matcapJoint })

	fbx.traverse(child => {
		if (child instanceof THREE.Mesh) {
			const mesh = child as THREE.Mesh
			mesh.castShadow = true
			mesh.receiveShadow = true
			if (mesh.name === 'Alpha_Surface') mesh.material = matSurface
			else if (mesh.name === 'Alpha_Joints') mesh.material = matJoint
		}
	})

	return (
		<group ref={ref} scale={0.01}>
			<primitive object={fbx} dispose={null} />
		</group>
	)
}
