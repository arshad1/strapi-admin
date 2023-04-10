import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Typography, Box, Button, Flex } from '@strapi/design-system';
import { Link } from '@strapi/design-system/v2';
import { ArrowRight } from '@strapi/icons';

const WordWrap = styled(Typography)`
  word-break: break-word;
`;

const HomeHeader = ({ hasCreatedContentType, onCreateCT }) => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <Box paddingLeft={6} paddingBottom={10}>
        <Flex direction="column" alignItems="flex-start" gap={5}>
          <Typography as="h1" variant="alpha">
            {hasCreatedContentType
              ? formatMessage({
                  id: 'app.components.HomePage.welcome.again',
                  defaultMessage: 'Welcome 👋',
                })
              : formatMessage({
                  id: 'app.components.HomePage.welcome22',
                  defaultMessage: 'Welcome on board! Arshad',
                })}
          </Typography>
          <WordWrap textColor="neutral600" variant="epsilon">
            {hasCreatedContentType
              ? formatMessage({
                  id: 'app.components.HomePage.welcomeBlock.content.again',
                  defaultMessage:
                    'We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback.',
                })
              : formatMessage({
                  id: 'app.components.HomePage.welcomeBlock.content',
                  defaultMessage:
                    'Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!',
                })}
          </WordWrap>
          {hasCreatedContentType ? (
            <Link isExternal href="https://strapi.io/blog">
              {formatMessage({
                id: 'app.components.HomePage.button.blog',
                defaultMessage: 'See more on the blog',
              })}
            </Link>
          ) : (
            <Button size="L" onClick={onCreateCT} endIcon={<ArrowRight />}>
              {formatMessage({
                id: 'app.components.HomePage.create',
                defaultMessage: 'Create your first Content type',
              })}
            </Button>
          )}
        </Flex>
      </Box>
    </div>
  );
};

HomeHeader.defaultProps = {
  hasCreatedContentType: undefined,
  onCreateCT: undefined,
};

HomeHeader.propTypes = {
  hasCreatedContentType: PropTypes.bool,
  onCreateCT: PropTypes.func,
};

export default HomeHeader;