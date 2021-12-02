import React, { Suspense, VFC } from 'react';
import { OrbitControls, Plane, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Model } from './Model';

export const YBot: VFC = () => {
	return (
		<Canvas
			camera={{
				position: [0, 1.5, 3],
				fov: 50,
				aspect: window.innerWidth / window.innerHeight,
				near: 0.1,
				far: 2000
			}}
			dpr={window.devicePixelRatio}
			shadows>
			{/* canvas color */}
			<color attach="background" args={['#1e1e1e']} />
			{/* fps */}
			<Stats />
			{/* camera controller */}
			<OrbitControls target={[0, 1, 0]} />
			{/* lights */}
			<ambientLight intensity={0.1} />
			<directionalLight position={[5, 5, 5]} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
			{/* objects */}
			<Suspense fallback={null}>
				<Model />
				<Plane rotation={[-Math.PI / 2, 0, 0]} args={[5, 5]} receiveShadow>
					<meshStandardMaterial />
				</Plane>
			</Suspense>
			{/* helper */}
			<axesHelper />
		</Canvas>
	)
}
