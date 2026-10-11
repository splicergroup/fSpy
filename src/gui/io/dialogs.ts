import { ipcRenderer } from 'electron'
import { ShowErrorBoxMessage } from '../ipc-messages'

export function showErrorBox(title: string, content: string) {
  ipcRenderer.send(ShowErrorBoxMessage.type, new ShowErrorBoxMessage(title, content))
}
