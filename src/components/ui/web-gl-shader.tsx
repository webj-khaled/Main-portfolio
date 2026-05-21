"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type ShaderUniforms = {
  resolution: { value: THREE.Vector2 };
  time: { value: number };
  xScale: { value: number };
  yScale: { value: number };
  distortion: { value: number };
};

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene | null;
    camera: THREE.OrthographicCamera | null;
    renderer: THREE.WebGLRenderer | null;
    mesh: THREE.Mesh<THREE.BufferGeometry, THREE.RawShaderMaterial> | null;
    uniforms: ShaderUniforms | null;
    animationId: number | null;
    reduceMotion: boolean;
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
    reduceMotion: false,
  });

  useEffect(() => {
    if (!canvasRef.current) return undefined;

    const canvas = canvasRef.current;
    const refs = sceneRef.current;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    refs.reduceMotion = motionQuery.matches;

    const vertexShader = `
      attribute vec3 position;

      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `;

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      refs.renderer.setSize(width, height, false);
      refs.uniforms.resolution.value.set(width, height);
    };

    const renderFrame = () => {
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera);
      }
    };

    const animate = () => {
      if (refs.uniforms && !refs.reduceMotion) {
        refs.uniforms.time.value += 0.01;
      }

      renderFrame();
      refs.animationId = window.requestAnimationFrame(animate);
    };

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      refs.reduceMotion = event.matches;
      if (refs.reduceMotion) {
        renderFrame();
      }
    };

    refs.scene = new THREE.Scene();
    refs.renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: false,
      canvas,
      powerPreference: "high-performance",
    });
    refs.renderer.setClearColor(new THREE.Color(0x000000));

    refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);
    refs.uniforms = {
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      time: { value: 0 },
      xScale: { value: 1 },
      yScale: { value: 0.5 },
      distortion: { value: 0.05 },
    };

    const position = [
      -1.0, -1.0, 0.0,
      1.0, -1.0, 0.0,
      -1.0, 1.0, 0.0,
      1.0, -1.0, 0.0,
      -1.0, 1.0, 0.0,
      1.0, 1.0, 0.0,
    ];

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(position), 3),
    );

    const material = new THREE.RawShaderMaterial({
      fragmentShader,
      side: THREE.DoubleSide,
      uniforms: refs.uniforms,
      vertexShader,
    });

    refs.mesh = new THREE.Mesh(geometry, material);
    refs.scene.add(refs.mesh);

    handleResize();
    animate();
    window.addEventListener("resize", handleResize);
    motionQuery.addEventListener("change", handleMotionPreference);

    return () => {
      if (refs.animationId) {
        window.cancelAnimationFrame(refs.animationId);
      }

      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener("change", handleMotionPreference);

      if (refs.mesh) {
        refs.scene?.remove(refs.mesh);
        refs.mesh.geometry.dispose();
        refs.mesh.material.dispose();
      }

      refs.renderer?.dispose();
      refs.scene = null;
      refs.camera = null;
      refs.renderer = null;
      refs.mesh = null;
      refs.uniforms = null;
      refs.animationId = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed left-0 top-0 block h-full w-full"
    />
  );
}
