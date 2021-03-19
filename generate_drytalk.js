function randomindex(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return index
}

function generateDrytalk(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
    mechanic: ['把車修好才下班', '換個燈泡', '拆變箱箱', '隨身攜帶一隻扳手'],
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  const engineertask = task.engineer
  const designertask = task.designer
  const entrepreneurtask = task.entrepreneur
  const mechanictask = task.mechanic

  let drytalk = ''

  if (!options.Profession) {
    return '注意! 請選擇一位專業人員產生你想要對他說的幹話!'
  }

  if (options.Profession === 'engineer') {
    drytalk = drytalk + '身為一個工程師,' + engineertask[randomindex(engineertask)] + phrase[randomindex(phrase)] + '吧!'
  }

  if (options.Profession === 'designer') {
    drytalk = drytalk + '身為一個設計師,' + designertask[randomindex(designertask)] + phrase[randomindex(phrase)] + '吧!'
  }

  if (options.Profession === 'entrepreneur') {
    drytalk = drytalk + '身為一個創業家,' + entrepreneurtask[randomindex(entrepreneurtask)] + phrase[randomindex(phrase)] + '吧!'
  }

  if (options.Profession === 'mechanic') {
    drytalk = drytalk + '身為一個汽車技師,' + mechanictask[randomindex(mechanictask)] + phrase[randomindex(phrase)] + '吧!'
  }

  return drytalk
}

module.exports = generateDrytalk