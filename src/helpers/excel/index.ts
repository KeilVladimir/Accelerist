import { saveAs } from 'file-saver';

function reformatForExcel(s: string) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
}

const createFile = (file: { file: string; name: string }) => {
  if (file) {
    const newFile: Blob = new Blob([reformatForExcel(atob(file.file))]);
    saveAs(newFile, file.name);
  }
};

export default createFile;
