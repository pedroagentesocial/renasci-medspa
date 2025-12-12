import { config as dotenv } from 'dotenv'
dotenv()
import ftp from 'basic-ftp'

async function main() {
  const host = process.env.FTP_HOST
  const user = process.env.FTP_USER
  const password = process.env.FTP_PASS
  const port = parseInt(process.env.FTP_PORT || '21', 10)
  const remoteDir = process.env.FTP_DIR || 'public_html'
  const localDir = process.env.LOCAL_DIR || 'dist'

  if (!host || !user || !password) {
    console.error('Missing FTP credentials. Set FTP_HOST, FTP_USER, FTP_PASS, FTP_PORT, FTP_DIR, LOCAL_DIR')
    process.exit(1)
  }

  const client = new ftp.Client(0)
  client.ftp.verbose = true
  client.trackProgress(info => {
    const name = info.name || ''
    console.log(`Uploading: ${name} ${info.bytes} bytes`)
  })

  try {
    await client.access({ host, user, password, port, secure: false })
    await client.cwd(remoteDir)
    if ((process.env.CLEAN || '').toLowerCase() === 'true') {
      await client.clearWorkingDir()
    }
    await client.uploadFromDir(localDir)
    console.log('Upload completed')
  } catch (e) {
    console.error('FTP upload failed:', e)
    process.exitCode = 1
  } finally {
    client.close()
  }
}

main()
