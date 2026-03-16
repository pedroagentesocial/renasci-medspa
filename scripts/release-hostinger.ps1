$ErrorActionPreference = "Stop"

Set-Location (Split-Path -Parent $PSScriptRoot)

function Invoke-Step {
  param(
    [Parameter(Mandatory = $true)][string]$Command,
    [switch]$AllowFailure
  )
  Write-Host "=> $Command"
  Invoke-Expression $Command
  if (-not $AllowFailure -and $LASTEXITCODE -ne 0) {
    throw "Falló el comando: $Command (exit code $LASTEXITCODE)"
  }
}

Write-Host "==> Verificando cambios git..."
Invoke-Step "git add -A"

$stagedFiles = git diff --cached --name-only
if ($LASTEXITCODE -ne 0) {
  throw "No se pudo evaluar cambios en git (exit code $LASTEXITCODE)"
}

if ($stagedFiles -and $stagedFiles.Count -gt 0) {
  Write-Host "==> Creando commit..."
  Invoke-Step "git commit -m `"feat: booking modal trigger fixes and membership slider background update`""
} else {
  Write-Host "==> No hay cambios para commit, se omite commit."
}

Write-Host "==> Haciendo push a main..."
Invoke-Step "git push origin main"

Write-Host "==> Ejecutando deploy..."
Invoke-Step "npm.cmd run deploy"

Write-Host "==> Listo."
