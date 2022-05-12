import path from 'path'
import floors from './src/data/floors'
import types from './src/data/types'

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-raphael/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  floors.forEach(({ floor, units }) => {
    createPage({
      path: `/floor/${floor}/`,
      component: path.resolve('./src/templates/floor.js'),
      context: {
        floor,
      },
    })

    units.forEach((unit) => {
      createPage({
        path: `/floor/${floor}/unit/${unit}`,
        component: path.resolve('./src/templates/unit.js'),
        context: {
          floor,
          unit,
        },
      })
    })
  })

  types.forEach(type => {
    createPage({
      path: `/type/${type}/`,
      component: path.resolve('./src/templates/type.js'),
      context: {
        type,
      },
    })
  })
}