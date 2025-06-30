# Testing and Linting Guide

This project includes basic testing and linting setup to ensure code quality and reliability.

## Testing Setup

### Dependencies
- **Jest**: JavaScript testing framework
- **React Testing Library**: Testing utilities for React components
- **@testing-library/jest-dom**: Custom Jest matchers for DOM testing

### Test Scripts

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests in CI mode (no watch, with coverage)
npm run test:ci
```

### Test Structure

```
src/
├── app/
│   └── __tests__/
│       └── page.test.tsx          # Basic app rendering test
```

### Current Test

The project includes one simple test that verifies the app renders without crashing:

```typescript
import { render } from '@testing-library/react'
import Home from '../page'

describe('App', () => {
  it('renders without crashing', () => {
    render(<Home />)
    // If we get here without errors, the app is running
  })
})
```

### Test Configuration

- **Jest Config**: `jest.config.js` - Main Jest configuration
- **Jest Setup**: `jest.setup.js` - Global test setup and mocks
- **TypeScript Config**: `tsconfig.jest.json` - TypeScript config for tests

## Linting Setup

### ESLint Configuration

The project uses ESLint with Next.js and TypeScript support:

- **Config File**: `eslint.config.mjs`
- **Rules**: Includes Next.js recommended rules plus custom quality rules

### Lint Scripts

```bash
# Run linting
npm run lint

# Run linting with auto-fix
npm run lint:fix
```

### Linting Rules

#### Code Quality
- `no-console`: Warns about console statements
- `no-debugger`: Errors on debugger statements
- `no-unused-vars`: Errors on unused variables
- `prefer-const`: Enforces const over let when possible

#### React Specific
- `react/jsx-uses-react`: Disabled (not needed in React 17+)
- `react/react-in-jsx-scope`: Disabled (not needed in React 17+)
- `react/prop-types`: Disabled (using TypeScript)

#### TypeScript Specific
- `@typescript-eslint/no-unused-vars`: TypeScript-aware unused variable detection
- `@typescript-eslint/no-explicit-any`: Warns about `any` usage

#### Import Organization
- `import/order`: Enforces consistent import ordering
- Groups imports: builtin → external → internal → parent → sibling → index
- Alphabetizes imports within groups

## Best Practices

### Testing
1. **Start simple**: Begin with basic rendering tests
2. **Test behavior, not implementation**: Focus on what the component does
3. **Use semantic queries**: Prefer `getByRole`, `getByLabelText` over `getByTestId`
4. **Mock external dependencies**: Mock API calls, router, and other external services

### Linting
1. **Fix linting errors**: Always fix linting errors before committing
2. **Use auto-fix**: Run `npm run lint:fix` to automatically fix many issues
3. **Follow import order**: Keep imports organized and consistent
4. **Avoid console statements**: Use proper logging in production code

## Continuous Integration

The project includes CI-ready test scripts:
- `npm run test:ci`: Runs tests without watch mode, suitable for CI/CD pipelines

## Troubleshooting

### Common Issues

1. **TypeScript errors in tests**: Ensure `tsconfig.jest.json` is properly configured
2. **React Testing Library not found**: Check that `@testing-library/react` is installed
3. **Jest matchers not working**: Ensure `jest.setup.js` is properly configured
4. **Import order errors**: Use `npm run lint:fix` to auto-fix import ordering

### Getting Help

- Check the [Jest documentation](https://jestjs.io/docs/getting-started)
- Review [React Testing Library guides](https://testing-library.com/docs/react-testing-library/intro/)
- Consult [ESLint rules documentation](https://eslint.org/docs/rules/) 