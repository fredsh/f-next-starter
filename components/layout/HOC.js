
import Layout from './index';

export const withLayout = (Page) => {
  return class extends React.Component {

    /*
     * If wrapped page has a getInitialProps, then call it
     */
    static async getInitialProps(ctx) {
      if (Page.getInitialProps)
        return await Page.getInitialProps(ctx);
      return {}
    }

    /*
     * Renders the layout with its props
     * and forward all props to wrapped component
     */
    render() {
      const {layoutSettings, ...rest} = this.props;
      return (
        <Layout {...layoutSettings}>
          <Page layoutSettings {...rest} />
        </Layout>
      )
    }

  }
}