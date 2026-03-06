$ErrorActionPreference = "Stop"

Set-Location (Split-Path -Parent $PSScriptRoot)

Write-Host "==> Verificando cambios git..."
git add -A

$hasChanges = $true
try {
  git diff --cached --quiet
  if ($LASTEXITCODE -eq 0) {
    $hasChanges = $false
  }
} catch {
  $hasChanges = $true
}

if ($hasChanges) {
  Write-Host "==> Creando commit..."
  git commit -m "feat: booking modal trigger fixes and membership slider background update"
} else {
  Write-Host "==> No hay cambios para commit, se omite commit."
}

Write-Host "==> Haciendo push a main..."
git push origin main

Write-Host "==> Ejecutando deploy..."
npm run deploy

Write-Host "==> Listo."
