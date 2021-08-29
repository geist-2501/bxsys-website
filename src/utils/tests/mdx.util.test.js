import fs from 'fs';
import MdxUtil from '../mdx.util';

jest.mock('fs');

describe('Mdx Util', function () {
  it('should get names of MDX files', function () {
    // Arrange.
    fs.readdirSync.mockReturnValue(['test-1.mdx', 'test-2.mdx', 'index.jsx']);

    // Act.
    const mdxNames = MdxUtil.getMdxNames('any');

    // Assert.
    expect(mdxNames).toHaveLength(2);
    expect(mdxNames).toContain('test-1');
    expect(mdxNames).toContain('test-2');
  });

});
