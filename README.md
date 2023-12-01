# KineXusEngine
Lightweight 2D Interactive Engine
KineXusEngine is a library for building interactive experiences with motion and physics.

## Installation
npm install kinexus-engine

## Usage

To use KineXusEngine, import it and create a World:
import { World } from 'kinexus-engine';

const world = new World();
You can then add bodies, joints, constraints, and forces to the world and simulate physics:
// Add a circle body
const body = world.addBody(new Circle(1));

// Add a revolute joint
world.addJoint(new RevoluteJoint(body, { x: 0, y: 0 }));

// Simulate physics
world.step(1 / 60);

## Examples

See the [examples](https://github.com/kinexus/kinexus-engine/tree/master/examples) folder for various examples of using KineXusEngine.

## Documentation

See the [documentation](https://kinexus.github.io/kinexus-engine/) for full API details and documentation.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

KineXusEngine is MIT licensed. See [LICENSE](LICENSE) for details.

## Publishing to npm

To publish a new version of KineXusEngine to npm:

### Bump The Version Number

1. 
2. Build the library:  `yarn build`  
3. 
4. Publish:  `npm publish` 
5. Create a git tag for the new version:  `git tag v1.0.0` 
6. Push the tag:  `git push --tags` 

Semantic versioning uses a three-part format: `MAJOR.MINOR.PATCH`, where:

- `MAJOR` version is incremented for incompatible API changes,
- `MINOR` version is incremented for adding functionality in a backward-compatible manner, and
- `PATCH` version is incremented for backward-compatible bug fixes.

Here's how you can bump up the version:

### Manual Update
1. Open your `package.json` file.
2. Update the `version` field to the new version number.
3. Save the changes.

For example, if the current version is `1.0.0` and you've made backward-compatible bug fixes, you would update it to `1.0.1`.

### Using npm version Command
Alternatively, npm provides a command that automatically updates the version number for you:

1. To increment the `PATCH` version:
   ```bash
   npm version patch
   ```

2. To increment the `MINOR` version:
   ```bash
   npm version minor
   ```

3. To increment the `MAJOR` version:
   ```bash
   npm version major
   ```

This command updates the `version` field in `package.json` and also commits this change to your Git repository if your project is a Git repository. 

### After Bumping the Version
- After updating the version, you should commit the changes to your version control system (if you're using one).
- Once the new version is committed, you can publish the updated package to npm using:
  ```bash
  npm publish
  ```

### Good Practices
- Ensure that your package is thoroughly tested with the new changes before bumping the version and publishing.
- Follow semantic versioning rules strictly to maintain consistency and predictability.
- Keep track of your changes in a changelog or release notes for transparency with the package users.











This will publish the new version to npm and create a git release with the changelog.