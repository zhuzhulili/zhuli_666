/*
 * @LastEditors: zl
 * @Date: 2022-09-01 17:54:58
 * @LastEditTime: 2022-09-01 17:57:15
 * @Email: 
 * @Description: 
 */
const req = require.context('@/assets/img/icon', false, /\.svg$/)
const requireAll = requireContext => {
  // requireContext.keys()数据：['./404.svg', './agency.svg', './det.svg', './user.svg']
  requireContext.keys().map(requireContext)
}
requireAll(req)