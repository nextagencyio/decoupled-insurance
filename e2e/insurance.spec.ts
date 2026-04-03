import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with Drupal content', async ({ page }) => {
    await page.goto('/')
    // The hero title from imported content
    await expect(page.locator('h1')).toContainText('Protection You Can Count On')
  })

  test('renders navigation header', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav')).toBeVisible()
    // Check key nav links exist
    await expect(page.getByRole('link', { name: /products/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /team/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /resources/i }).first()).toBeVisible()
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    // CTA from imported content or fallback
    await expect(page.getByText(/get a quote/i).first()).toBeVisible()
  })
})

test.describe('Products page', () => {
  test('lists insurance products', async ({ page }) => {
    await page.goto('/products')
    await expect(page.getByText('Homeowners Insurance').first()).toBeVisible()
    await expect(page.getByText('Auto Insurance').first()).toBeVisible()
    await expect(page.getByText('Life Insurance').first()).toBeVisible()
    await expect(page.getByText('Business Insurance').first()).toBeVisible()
  })

  test('product detail page loads', async ({ page }) => {
    await page.goto('/products/homeowners-insurance')
    await expect(page.locator('h1')).toContainText('Homeowners Insurance')
  })
})

test.describe('Team page', () => {
  test('lists team members', async ({ page }) => {
    await page.goto('/team')
    await expect(page.getByText('David Thompson').first()).toBeVisible()
    await expect(page.getByText('Lisa Park').first()).toBeVisible()
    await expect(page.getByText('Marcus Johnson').first()).toBeVisible()
  })

  test('team member detail page loads', async ({ page }) => {
    await page.goto('/team/david-thompson')
    await expect(page.locator('h1')).toContainText('David Thompson')
  })
})

test.describe('Resources page', () => {
  test('lists resources', async ({ page }) => {
    await page.goto('/resources')
    await expect(page.getByText('How to Create a Home Inventory').first()).toBeVisible()
    await expect(page.getByText('What to Do After a Car Accident').first()).toBeVisible()
  })

  test('resource detail page loads', async ({ page }) => {
    await page.goto('/resources/home-inventory-guide')
    await expect(page.locator('h1')).toContainText('How to Create a Home Inventory')
  })
})

test.describe('Static pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About SafeGuard Insurance')
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toBeVisible()
  })
})
