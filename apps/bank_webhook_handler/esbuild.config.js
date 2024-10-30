// esbuild.config.js
import esbuild from 'esbuild';

const productionMode = process.env.NODE_ENV === 'production';

async function build() {
  const context = await esbuild.context({
    entryPoints: ['./src/index.ts'],
    outfile: './dist/index.js',
    bundle: true,
    platform: 'node',
    target: 'node16',  // Specify the Node version you're targeting
    minify: productionMode,
    sourcemap: !productionMode,
  });

  if (!productionMode) {
    // Watch for file changes in development mode
    await context.watch({
      onRebuild(error) {
        if (error) console.error('Watch build failed:', error);
        else console.log('Rebuilt successfully');
      },
    });
  } else {
    // Run a single production build
    await context.rebuild();
    context.dispose();
  }

  console.log(`Build ${productionMode ? 'production' : 'development'} complete`);
}

build().catch(() => process.exit(1));
